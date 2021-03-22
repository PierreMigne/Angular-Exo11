export class User {
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _password: string;

  static nexId = 1;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) {
    this._id = User.nexId;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._password = password;

    User.nexId++;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Getter firstname
   * @return {string}
   */
  public get firstname(): string {
    return this._firstname;
  }

  /**
   * Setter firstname
   * @param {string} value
   */
  public set firstname(value: string) {
    this._firstname = value;
  }

  /**
   * Getter lastname
   * @return {string}
   */
  public get lastname(): string {
    return this._lastname;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }
}
