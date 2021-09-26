import axios, { AxiosResponse } from 'axios';

export class Sync {
  url = 'http://localhost:3000/users';

  fetch(): void {
    axios
      .get(`${this.url}/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`${this.url}/${id}`, this.data);
    } else {
      axios.post(this.url, this.data);
    }
  }
}
