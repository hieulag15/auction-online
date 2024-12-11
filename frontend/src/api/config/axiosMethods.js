/* eslint-disable no-async-promise-executor */
import axiosClient from './apiClient';

export const GET = ({ url, headers, payload, responseType = 'json' }) => new Promise(async (resolve, reject) => {
    axiosClient.get(url, { headers, params: payload, responseType })
        .then(resolve)
        .catch(reject)
})

export const POST = ({ url, payload, headers }) => new Promise(async (resolve, reject) => {
    axiosClient.post(url, payload, { headers })
        .then(resolve)
        .catch(reject);
});

export const PUT = ({ url, headers, payload }) => new Promise(async (resolve, reject) => {
    axiosClient.put(url, payload, { headers })
        .then(resolve)
        .catch(reject)
})

export const DELETE = ({ url, payload, headers }) => new Promise(async (resolve, reject) => {
    axiosClient.delete(url, payload, { headers })
        .then(resolve)
        .catch(reject)
})

export const PATCH = ({ url, headers, payload }) => new Promise(async (resolve, reject) => {
  axiosClient.patch(url, payload, { headers })
      .then(resolve)
      .catch(reject);
});