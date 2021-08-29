import { RadioStation } from './radioStation';
import { StationList } from './stationList';

const stationList = new StationList();
stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(103.2));

while (stationList.hasNext()) {
  console.log(stationList.next().getFrequency());
}
