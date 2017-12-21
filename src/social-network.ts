export interface Person {
  name: String;
}

export interface SocialNetwork {
  section: String;
  title: String;
  getUsers(): Person[];
}
