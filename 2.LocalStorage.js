// https://www.devtools.tech/questions/s/design-and-implement-localstorage-api-or-frontend-problem-solving-or-javascript-interview-question---qid---UAh0XKLuf8zdwv0JcA43
class LocalStorage {
    constructor() {
        this.store = new Map();
    }
    get length() {
        return this.store.size
    }
    getItem = (...args) => {
        if(!args.length){
            throw new TypeError( "Failed to execute 'getItem'. 1 argument required, but only 0 present.")
        }
        let key = args[0];
        return this.store.get(String(key))
    }
    setItem = (...args) => {
        if(!args.length || args.length < 2){
            throw new TypeError( `Failed to execute 'setItem'. 2 argument required, but only ${args.length} present.`)
        }
        let key = args[0];
        let value = args[1];

        this.store.set(String(key), String(value))
    }
    removeItem = (...args)=> {
        if(!args.length){
            throw new TypeError( "Failed to execute 'removeItem'. 1 argument required, but only 0 present.")
        }
        this.store.delete(String(args[0]))
    }
    clear = () => {
        this.store.clear()
    }
}

const localStorage = new LocalStorage()



class Developer {
    // write your solution here
    constructor(name) {
      this.name = name;
      this.skills = new Map();
      this.frameworks = new Map();
    }
    addSkill = function(skill){
      if (this.skills.has(skill)) {
        throw new Error('Skill already exists');
      }
      this.skills.set(skill, skill);
    };
    getSkills = function(){
      let skills = [...this.skills.keys()];
      return skills.join(', ');
    };
    addFrameworks = function(frameworks){
      if (this.frameworkss.has(frameworks)) {
        throw new Error('Frameworks already exists');
      }
      this.frameworkss.set(frameworks, frameworks);
    };
    getFrameworkss = function(){
      let frameworkss = [...this.frameworkss.keys()];
      return frameworkss.join(', ');
    };
    hasSkill = function(skill){
      return this.skills.has(skill);
    };
    removeSkill = function(skill){
      if (!this.skills.has(skill)) {
        throw new Error('Skill is not present');
      } else this.skills.delete(skill);
    };
    removeFramework = function(framework){
      if (!this.frameworkss.has(framework)) {
        throw new Error('Skill is not present');
      } else this.frameworkss.delete(framework);
    };
  }