import axios from "axios";
import config from "../../config";

const API = {
    getAllEntryByType: (type, order) => {
        return new Promise(function (resolve, reject) {
            axios({
                method: 'get',
                url: `${config.BASE_URL}/entries?access_token=${config.CONTENTFUL_ACCESS_TOKEN}&content_type=${type}${order ? "&order=-fields.startDate" : ''}`,
            })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error.response.data);
                });
        });
    },

    getAssetById: id => {
        return new Promise(function (resolve, reject) {
            axios({
                method: 'get',
                url: `${config.BASE_URL}/assets/${id}?access_token=${config.CONTENTFUL_ACCESS_TOKEN}`
            })
                 .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error.response.data);
                });
        });
    }
}

export default API;