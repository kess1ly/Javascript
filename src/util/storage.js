const PETS_KEY = "pets";
const USER_KEY = "usuarioLogado";
const ADMIN_KEY = "adminLogado";

export function getPets() {
  return JSON.parse(localStorage.getItem(PETS_KEY)) || [];
}

export function savePets(pets) {
  localStorage.setItem(PETS_KEY, JSON.stringify(pets));
}

export function getUser() {
  return JSON.parse(localStorage.getItem(USER_KEY));
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem(USER_KEY);
}

export function setAdminLogin(value) {
  localStorage.setItem(ADMIN_KEY, value);
}

export function getAdminLogin() {
  return localStorage.getItem(ADMIN_KEY) === "true";
}
