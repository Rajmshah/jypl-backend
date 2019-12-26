import axios from "axios";
import moment from "moment/moment";
import globalJs from "@/service/global";
// Local

// const adminUrl = "http://localhost:3000/";

// Server

const adminUrl = "http://api.jypl.in/";

export default {
  // Player APIS CALLING

  // get All Player
  searchPlayer: (data, callback) =>
    axios
      .get(`${adminUrl}Player/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // update Player
  updatePlayer: (id, data, callback) =>
    axios
      .put(`${adminUrl}Player/updatePlayer/${id}`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // save Player
  savePlayer: (data, callback) =>
    axios
      .post(`${adminUrl}Player/savePlayer`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // delete Player
  deletePlayer: (id, callback) =>
    axios
      .delete(`${adminUrl}Player/deletePlayer/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // get one Player
  getOnePlayer: (id, callback) =>
    axios
      .get(`${adminUrl}Player/getOne/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  generateWelcomeMail: (data, callback) =>
    axios
      .post(`${adminUrl}Player/generateWelcomeMail`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // Player APIS CALLING END

  // Setting APIS CALLING

  // get All Setting
  searchSetting: (data, callback) =>
    axios
      .get(`${adminUrl}Setting/`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // update Setting
  updateSetting: (id, data, callback) =>
    axios
      .put(`${adminUrl}Setting/updateSetting/${id}`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // save Setting
  saveSetting: (data, callback) =>
    axios
      .post(`${adminUrl}Setting/saveSetting`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // delete Setting
  deleteSetting: (id, callback) =>
    axios
      .delete(`${adminUrl}Setting/deleteSetting/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // get one Setting
  getOneSetting: (id, callback) =>
    axios
      .get(`${adminUrl}Setting/getOne/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // Setting APIS CALLING END
  // TeamList APIS CALLING

  // get All TeamList
  searchTeamList: (data, callback) =>
    axios
      .get(`${adminUrl}TeamList/searchTeamList`, { params: data })
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // update TeamList
  updateTeamList: (id, data, callback) =>
    axios
      .put(`${adminUrl}TeamList/updateTeamList/${id}`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // save TeamList
  saveTeamList: (data, callback) =>
    axios
      .post(`${adminUrl}TeamList/saveTeamList`, data)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // delete TeamList
  deleteTeamList: (id, callback) =>
    axios
      .delete(`${adminUrl}TeamList/deleteTeamList/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // get one TeamList
  getOneTeamList: (id, callback) =>
    axios
      .get(`${adminUrl}TeamList/getOne/${id}`)
      .then(responseData => {
        callback(responseData);
      })
      .catch(err => {
        callback(err);
      }),

  // TeamList APIS CALLING END

  generatePlayerExcel: (reportData, filename, callback) =>
    axios({
      url: `${adminUrl}Player/generateExcel`,
      reportData,
      method: "POST",
      responseType: "blob"
    })
      .then(response => {
        const fileName = `${filename}-${moment().format("MMM-DD-YYYY-hh-mm-ss-a")}.xlsx`;
        const blob = new Blob([response.data]);
        const objectUrl = (window.URL || window.webkitURL).createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        callback(null, fileName);
      })
      .catch(err => {
        callback(err);
      }),
  upload: (formData, callback) =>
    axios
      .post(globalJs.uploadUrl, formData)
      .then(data => {
        callback(data);
      })
      .catch(err => {
        callback(err);
      })
};
