import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}
  url = 'http://localhost:3000/users';

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

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
