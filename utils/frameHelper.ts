import { EnvConstants } from '../constants/envConstants';
import appData from '../testData/appData.json'

type appData = {
    userName:string;
    password:string;
}

export class FrameHelper {
    static loadTestData(environment:EnvConstants):appData {
        return appData[environment];
    }

}