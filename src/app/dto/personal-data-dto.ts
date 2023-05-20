export class PersonalDataDTO {

  private id!: number;

  private curp!: string;

  private name!: string;

  private lastName!: string;

  private mothersLastName!: string;

  private birthday!: string;

  private email!: string;

  private phone!: string;

  private roleId!: number;

  private cellphone!: string;

  public getId(): number {
    return this.id;
  }

  public seId(value: number) {
    this.id = value;
  }

  public getCurp(): string {
    return this.curp;
  }

  public setCurp(value: string) {
    this.curp = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(value: string) {
    this.lastName = value;
  }

  public getMothersLastName(): string {
    return this.mothersLastName;
  }

  public setMothersLastName(value: string) {
    this.mothersLastName = value;
  }

  public getBirthday(): string {
    return this.birthday;
  }

  public setBirthday(value: string) {
    this.birthday = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string) {
    this.email = value;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(value: string) {
    this.phone = value;
  }

  public getCellphone(): string {
    return this.cellphone;
  }

  public setCellphone(value: string) {
    this.cellphone = value;
  }

  public getRoleId(): number {
    return this.roleId;
  }

  public seRoleId(value: number) {
    this.roleId = value;
  }
}
