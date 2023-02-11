class Api {
  constructor(
    options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
      },
    }
  ) {
    this._baseUrl = 'https://api.julianrb-around.students.nomoredomainssbs.ru/';
    this._options = options;
  }

  _fetchData() {
    if (this._jwt) this._options.headers.authorization = `Bearer ${this._jwt}`;
    return fetch(this._baseUrl + this._specificUrl, this._options)
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }

  getUserInfo(jwt) {
    this._jwt = jwt;
    this._specificUrl = 'users/me';
    this._options.method = 'GET';
    delete this._options.body;
    return this._fetchData();
  }

  toggleLikeBtn(id, isLiked) {
    this._specificUrl = `cards/likes/${id} `;
    this._options.method = isLiked ? 'DELETE' : 'PUT';
    delete this._options.body;
    return this._fetchData();
  }

  deleteCard(id) {
    this._specificUrl = `cards/${id} `;
    this._options.method = 'DELETE';
    delete this._options.body;
    return this._fetchData().then(() => id);
  }

  setNewPlace(data) {
    this._specificUrl = 'cards';
    this._options.method = 'POST';
    this._options.body = JSON.stringify({
      name: data.newPlaceCaption,
      link: data.newPlace,
    });
    return this._fetchData();
  }

  changeUserInfo(data) {
    this._specificUrl = 'users/me';
    this._options.method = 'PATCH';
    this._options.body = JSON.stringify({
      name: data.name,
      about: data.about,
    });
    return this._fetchData();
  }

  getInitialCards() {
    this._specificUrl = 'cards';
    this._options.method = 'GET';
    delete this._options._body;
    return this._fetchData();
  }

  setProfilePic(data) {
    this._specificUrl = 'users/me/avatar';
    this._options.method = 'PATCH';
    this._options.body = JSON.stringify(data);
    return this._fetchData();
  }
}

export default new Api();
