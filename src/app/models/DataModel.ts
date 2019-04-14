export interface DanceTeam {
  name_female: string;
  name_male: string;
  familyname_female: string;
  familyname_male: string;
  name_team: string;
}

export interface MusicUrl {
  footwork: string;
  acrobatic: string;
  setup: string;
  show: string;
  reserve: string;
}

export interface DataModel {
  folder: string;
  filename: string;
  danceTeam: DanceTeam;
  music: MusicUrl;
}
