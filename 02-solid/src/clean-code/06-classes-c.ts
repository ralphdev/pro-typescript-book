(() => {
  // Aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {

    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {

      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }


  interface UserProps {
    email: string;
    role: string;
  }

  class User {

    public lastAccess: Date;
    public role: string;
    public email: string;

    constructor({ email, role }: UserProps) {

      this.lastAccess = new Date();

      this.role = role;
      this.email = email;

    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {

    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProps) {

      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }


  class UserSettings {

    public person: Person;
    public user: User;
    public setting: Settings;

    constructor({ name, gender, birthdate, email, role, lastOpenFolder, workingDirectory }: UserSettingsProps) {

      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.setting = new Settings({ workingDirectory, lastOpenFolder });
    }

  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
  });


  console.log({ userSettings });
})();
