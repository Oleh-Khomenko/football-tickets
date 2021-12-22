import http from '../instances/http';

export const StadiumApi = {
  async getCells() {
    return (await http.get('/cells')).data;
  },
  async getPlaces(cellId) {
    const params = {
      cellId,
    };
    return (await http.get('/places', { params })).data;
  },
  async buyTicket(cellId, id) {
    await http.post('/buy', { cellId, id });
  },
};
