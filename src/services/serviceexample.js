/* eslint-disable */
import http from "../Base";
import notificationsService from '@/services/notifications.service'

export default {
  getRequestApi() {
    return httpHeader.get('/getrequest/')
      .then(({ data }) => {
        return Promise.resolve(data)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  },
  // starting a patient visit
  getAllPatients(e) {
    http().get('/users/getallpatients')
      .then(res => {
        // console.log(res.data);
        // cleanup res
        let dat = []
        res.data.forEach(e => {
          dat.push(JSON.parse(e))
        })
        dat.reverse()
        let pData = dat.map(e => {
          return {
            id: e.sz_patientid,
            email: e.sz_email,
            name: e.sz_username,
            mobile: e.sz_phoneno,
            dob: e.sz_dob,
            gender: e.sz_gender,
            hasActiveVisit: e.sz_status.toLowerCase() === 'active',
            visitID: ''
          }
        })
        // console.log(pData);
        e.tableData = pData
        return true
      })
      .catch(err => {
        e.$snotify.error('Could not retrieve patients')
        return false
      })
      .finally(() => {
        e.isLoading = false
      })
  },

  ////////////////////////////////////////
  preSearchPopulation(e) {
    http().get('/users/getallpatients')
      .then(res => {
        // cleanup res
        let dat = []
        res.data.forEach(e => {
          dat.push(JSON.parse(e))
        });
        dat.reverse()
        e.allPatientsData = dat.map(e => {
          return {
            id: e.sz_patientid,
            email: e.sz_email,
            name: e.sz_username,
            mobile: e.sz_phoneno,
            dob: e.sz_dob,
            gender: e.sz_gender,
            hasActiveVisit: e.sz_status.toLowerCase() === 'active',
            visitID: ''
          }
        })
        e.tableData = e.allPatientsData
        return true
      })
      .catch(err => {
        return false
      })
  },
 

  continueVisit(e, params) {
    // console.log(params);
    e.$snotify.info('Loading...')
    http().post('/visits/getlatestvisit', { 'szpatientid': params.patientObj.id })
      .then(res => {
        // console.log(res.data);
        params.patientObj.visitID = JSON.parse(res.data[0])['szvisitid']
        // set store variables
        e.$store.commit('visitation/setVisitId', params.patientObj.visitID)
        e.$store.commit('visitation/setPatientId', params.patientObj.id)
        e.$store.commit('visitation/setPatientName', params.patientObj.name)
        e.$store.commit('visitation/setPatientDOB', params.patientObj.dob)
        // redirect to /nurse/patient
        // e.$router.push('/nurse/patient')
        e.$router.push({ name: 'nurse-patient', params: { refPatientId: params.patientObj.id } })
      })
      .catch(err => {
        e.$snotify.error(`Could not retrieve the visit details for ${params.patientObj.name}.\nPlease refresh and try again`)
      })
  },

  // TAKING VITALS
  getVitalsForm(e) {
    http().get('/visits/getallvitals')
      .then(res => {
        let vitals = res.data.map(v => {
          let t = JSON.parse(v)
          return {
            vitalTag: t.sz_vital,
            vitalName: t.sz_fullname,
            vitalUnit: t.sz_unit,
            vitalRules: t.sz_rules,
            isImportant: false
          }
        })
        e.vitalFields = vitals
        e.$forceUpdate()
        return true
      })
      .catch(err => {
        e.$snotify.info('Could not prepare the vitals-taking form. Check your internet connection')
        return false
      })
      .finally(() => {
        e.loadingForm = false
      })
  },

  submitVitals(e, params) {
    http().post('/visits/addvitals', params)
      .then(res => {
        let msg = `Your vitals have just been taken by ${e.name}`
        notificationsService.sendNotification(params['szpatientid'], msg)
          .catch(err => {
            console.log('Did not notify')
          })
        e.$snotify.success('Patients vitals taken')
        e.vitalsData = {}
        e.$parent.openForm('complaints')
      })
      .catch(err => {
        e.$snotify.error('Could not record vitals. Check your internet connection')
      })
      .finally(() => {
        e.isSubmitting = false
      })
  },

  // SUBMIT COMPLAINT
  submitComplaint(e, params) {
    // console.log(params);
    http().post('/visits/addcomplaint', params)
      .then(res => {
        e.$snotify.success('Patient\'s complaint has been recorded')
        e.complain = ''
        e.complains = []
        e.$parent.openForm('assign')
      })
      .catch(err => {
        e.$snotify.error('Could not submit the patients complaint. Please check your internet connection')
        return false
      })
      .finally(() => {
        e.isSubmitting = false
      })
  },

  // SET AN APPOINTMENT
  getAllDoctors(e, params) {
    let loader = e.$loading.show({
      canCancel: true,
      onCancel: e.onCancel
    });
    http().post('/employee/getalldoctors', {
      sz_hospid: params.hospitalID
    })
      .then(res => {
        // console.log(res.data);
        loader.hide();
        e.availableDoctors.push(
          ...res.data.map(d => {
            let t = JSON.parse(d)

            return {
              id: t.id,
              empID: t.sz_empid,
              name: `${t.sz_fname} ${t.sz_oname} ${t.sz_lname}`,
              hospitalID: t.sz_hospid,
              section: t.sz_wunit,
              sectionID: t.sz_unitid
            }
          })
        )
        return true
      })
      .catch(err => {
        loader.hide();
        e.$snotify.error('Could not retrieve the list of available doctors. Please check you internet connection')
        return false
      })
  },

  removeAppointment(e, params) {
    http().post('#')
      .then(() => { })
      .catch(() => { })
  },

  assignDoctor(e, docName, params) {
    http().post("/visits/assigndoctor", params)
      .then(res => {
        e.$snotify.success(`Successfully assigned ${e.patientName} to ${docName}`)
        let msg = `${e.userName} just assigned ${e.patientName} to you`
        notificationsService.sendNotification(params['sz_doctorempid'], msg)
          .catch(err => {
            console.log('Did not notify')
          })
      })
      .catch(() => {
        e.$snotify.error("Error occurred during processing!")
      })
      .finally(() => {
        e.isAssigning = false
      })
  },

  // End visit
  endVisit(e, params) {
    http().post('/visits/endvisit', params)
      .then(res => {
        // console.log(res);
        let msg = `${e.name} has ended your hospital visit.`
        notificationsService.sendNotification(params['szpatientid'], msg)
          .catch(err => {
            console.log('Did not notify')
          })
        e.$snotify.success('The visit has successfully ended')
        e.$store.commit('visitation/setVisitId', '')
        e.$store.commit('visitation/setPatientId', '')
        e.$store.commit('visitation/setPatientName', '')
        e.$store.commit('visitation/setPatientDOB', '')
        e.$store.commit('visitation/setVitals', null)
        e.$router.push('/nurse')
      })
      .catch(err => {
        e.$snotify.error('Please check your internet connection')
      })
      .finally(() => {
        e.isEndingVisit = false
      })
  }
};