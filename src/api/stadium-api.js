import http from '../instances/http';

export const StadiumApi = {
  async getCells() {
    return (await http.get('/cells')).data;
  },
}
