import axios from 'axios';

export const loadMovies = () => {

    const domain = 'https://mfwkweb-api.clarovideo.net';
    const params = `api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexico`;
    const endpoint = `${domain}/services/content/list?${params}`;

    return dispatch => {
        return axios.get(endpoint)
            .then(response => {
                dispatch({
                    type: "LOAD_MOVIES",
                    movies: response.data.response.groups
                });
            })
            .catch(
                dispatch({
                    type: "ERROR_LOAD_MOVIES"
                })
            );
    };
};

export const loadDetail = (id) => {
    const domain = 'https://mfwkweb-api.clarovideo.net';
    const params = `api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=akok4b0ulosok9nccubd9a58r7&group_id=${id}`;
    const endpoint = `${domain}/services/content/data?${params}`;

    return dispatch => {
        return axios.get(endpoint)
            .then(response => {
                dispatch({
                    type: "LOAD_DETAIL",
                    detail: response.data.response.group.common
                });
            })
            .catch(
                dispatch({
                    type: "ERROR_LOAD_DETAIL",
                })
            );
    }
};

export const setTxtBusq = (txtBusq) => {
    return {
        type: "SET_TXT_BUSQ",
        txtBusq
    }
};