import axios from 'axios';
import moment from 'moment/moment';
import globalJs from '@/service/global';
// Local

// const adminUrl = 'http://localhost:3000/';

// Server

const adminUrl = 'http://api.mtcmarudharcup.com/';

export default {
  // userlogin: (data, callback) => axios
  //     .post(`${adminUrl}User/login`, data)
  //     .then((responseData) => {
  //       callback(responseData);
  //     })
  //     .catch((err) => {
  //       callback(err);
  //     }),

  // USER APIS CALLING

  // get All User
  searchUser: (data, callback) => axios
      .get(`${adminUrl}User/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update user
  updateUser: (id, data, callback) => axios
      .put(`${adminUrl}User/updateUser/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save user
  saveUser: (data, callback) => axios
      .post(`${adminUrl}User/saveUser`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete user
  deleteUser: (id, callback) => axios
      .delete(`${adminUrl}User/deleteUser/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one user
  getOneUser: (id, callback) => axios
      .get(`${adminUrl}User/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // USER APIS CALLING END

  // TEAM APIS CALLING

  // get All Team
  searchTeam: (data, callback) => axios
      .get(`${adminUrl}Team/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Team
  updateTeam: (id, data, callback) => axios
      .put(`${adminUrl}Team/updateTeam/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Team
  saveTeam: (data, callback) => axios
      .post(`${adminUrl}Team/saveTeam`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Team
  deleteTeam: (id, callback) => axios
      .delete(`${adminUrl}Team/deleteTeam/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Team
  getOneTeam: (id, callback) => axios
      .get(`${adminUrl}Team/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // TEAM APIS CALLING END

  // Player APIS CALLING

  // get All Player
  searchPlayer: (data, callback) => axios
      .get(`${adminUrl}Player/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Player
  updatePlayer: (id, data, callback) => axios
      .put(`${adminUrl}Player/updatePlayer/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Player
  savePlayer: (data, callback) => axios
      .post(`${adminUrl}Player/savePlayer`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Player
  deletePlayer: (id, callback) => axios
      .delete(`${adminUrl}Player/deletePlayer/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Player
  getOnePlayer: (id, callback) => axios
      .get(`${adminUrl}Player/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Player APIS CALLING END

  // Setting APIS CALLING

  // get All Setting
  searchSetting: (data, callback) => axios
      .get(`${adminUrl}Setting/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Setting
  updateSetting: (id, data, callback) => axios
      .put(`${adminUrl}Setting/updateSetting/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Setting
  saveSetting: (data, callback) => axios
      .post(`${adminUrl}Setting/saveSetting`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Setting
  deleteSetting: (id, callback) => axios
      .delete(`${adminUrl}Setting/deleteSetting/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Setting
  getOneSetting: (id, callback) => axios
      .get(`${adminUrl}Setting/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Setting APIS CALLING END

  // About APIS CALLING

  // get All About
  searchAbout: (data, callback) => axios
      .get(`${adminUrl}About/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update About
  updateAbout: (id, data, callback) => axios
      .put(`${adminUrl}About/updateAbout/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save About
  saveAbout: (data, callback) => axios
      .post(`${adminUrl}About/saveAbout`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete About
  deleteAbout: (id, callback) => axios
      .delete(`${adminUrl}About/deleteAbout/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one About
  getOneAbout: (id, callback) => axios
      .get(`${adminUrl}About/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // About APIS CALLING END
  // Homepage APIS CALLING

  // get All Homepage
  searchHomepage: (data, callback) => axios
      .get(`${adminUrl}Homepage/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Homepage
  updateHomepage: (id, data, callback) => axios
      .put(`${adminUrl}Homepage/updateHomepage/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Homepage
  saveHomepage: (data, callback) => axios
      .post(`${adminUrl}Homepage/saveHomepage`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Homepage
  deleteHomepage: (id, callback) => axios
      .delete(`${adminUrl}Homepage/deleteHomepage/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Homepage
  getOneHomepage: (id, callback) => axios
      .get(`${adminUrl}Homepage/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Homepage APIS CALLING END
  // Contact APIS CALLING

  // get All Contact
  searchContact: (data, callback) => axios
      .get(`${adminUrl}Contact/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Contact
  updateContact: (id, data, callback) => axios
      .put(`${adminUrl}Contact/updateContact/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Contact
  saveContact: (data, callback) => axios
      .post(`${adminUrl}Contact/saveContact`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Contact
  deleteContact: (id, callback) => axios
      .delete(`${adminUrl}Contact/deleteContact/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Contact
  getOneContact: (id, callback) => axios
      .get(`${adminUrl}Contact/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  getOneSpecialContact: (id, callback) => axios
      .get(`${adminUrl}Contact/getOneSpecialContact/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Contact APIS CALLING END

  // SPONSOR APIS CALLING
  // get All Sponsor
  searchSponsor: (data, callback) => axios
      .get(`${adminUrl}Sponsor/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // update Sponsor
  updateSponsor: (id, data, callback) => axios
      .put(`${adminUrl}Sponsor/updateSponsor/${id}`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // save Sponsor
  saveSponsor: (data, callback) => axios
      .post(`${adminUrl}Sponsor/saveSponsor`, data)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // delete Sponsor
  deleteSponsor: (id, callback) => axios
      .delete(`${adminUrl}Sponsor/deleteSponsor/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // get one Sponsor
  getOneSponsor: (id, callback) => axios
      .get(`${adminUrl}Sponsor/getOne/${id}`)
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Sponsor APIS CALLING END

  // Subscription APIS CALLING

  // get All Subscription
  searchSubscription: (data, callback) => axios
      .get(`${adminUrl}Subscription/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // Subscription APIS CALLING END

  // get All EnquiryForm
  searchEnquiry: (data, callback) => axios
      .get(`${adminUrl}EnquiryForm/`, { params: data })
      .then((responseData) => {
        callback(responseData);
      })
      .catch((err) => {
        callback(err);
      }),

  // EnquiryForm APIS CALLING END

  // export to excel
  generateUserExcel: (reportData, filename, callback) => axios({
      url: `${adminUrl}User/generateExcel`,
      reportData,
      method: 'POST',
      responseType: 'blob',
    })
      .then((response) => {
        const fileName = `${filename}-${moment().format('MMM-DD-YYYY-hh-mm-ss-a')}.xlsx`;
        const blob = new Blob([response.data]);
        const objectUrl = (window.URL || window.webkitURL).createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        callback(null, fileName);
      })
      .catch((err) => {
        callback(err);
      }),
  generateTeamExcel: (reportData, filename, callback) => axios({
      url: `${adminUrl}Player/generateExcel`,
      reportData,
      method: 'POST',
      responseType: 'blob',
    })
      .then((response) => {
        const fileName = `${filename}-${moment().format('MMM-DD-YYYY-hh-mm-ss-a')}.xlsx`;
        const blob = new Blob([response.data]);
        const objectUrl = (window.URL || window.webkitURL).createObjectURL(blob);
        const link = document.createElement('a');
        link.href = objectUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        callback(null, fileName);
      })
      .catch((err) => {
        callback(err);
      }),
  upload: (formData, callback) => axios
      .post(globalJs.uploadUrl, formData)
      .then((data) => {
        callback(data);
      })
      .catch((err) => {
        callback(err);
      }),
};
