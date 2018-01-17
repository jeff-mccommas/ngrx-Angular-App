import {Particant} from "../../model/particant"
import {Thread} from "../../model/thread"
import {Message} from "../../model/message"
export interface AlluserData {
  participants:Particant[];
  threads:Thread[];
  messages:Message[];
}
