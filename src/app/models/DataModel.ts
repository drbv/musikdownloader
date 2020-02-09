export interface DanceTeam {
  name_female: string;
  name_male: string;
  familyname_female: string;
  familyname_male: string;
  name_team: string;
}

export interface PortalMusic {
  footwork: string;
  acrobatic: string;
  setup_short: string;
  show_short: string;
  reserve_short: string;
  setup_long: string;
  show_long: string;
  reserve_long: string;
}

export interface DatabaseMusic {
  name: string;
  title: string;
  speed: number;
  genre: string;
  url: string;
}

export interface DataModel {
  folder: string;
  danceTeam: DanceTeam;
  portalMusic: PortalMusic;
  databaseMusic: DatabaseMusic;
}
