
import { SocialNetwork} from './social-network';

class App implements SocialNetwork {
  title="first work";
  section="learning"

  getUsers(){
    return [{name:"John"}]
  }
}

