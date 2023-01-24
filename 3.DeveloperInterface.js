// https://www.devtools.tech/questions/s/how-to-implement-a-developer-builder-interface-or-frontend-problem-solving-or-javascript-interview-question---qid---CjH1hGv2r19ouztiDck2
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
      return this;
    };
    getSkills = function(){
      let skills = [...this.skills.keys()];
      return skills.join(', ');
    };
    addFramework = function(frameworks){
      if (this.frameworks.has(frameworks)) {
        throw new Error('Frameworks already exists');
      }
      this.frameworks.set(frameworks, frameworks);
      return this;
    };
    getFrameworks = function(){
      let frameworks = [...this.frameworks.keys()];
      return frameworks.join(', ');
    };
    hasSkill = function(skill){
      return this.skills.has(skill);
    };
    removeSkill = function(skill){
      if (!this.skills.has(skill)) {
        throw new Error('Skill is not present');
      } else this.skills.delete(skill);
      return this;
    };
    removeFramework = function(framework){
      if (!this.frameworks.has(framework)) {
        throw new Error('Skill is not present');
      } else this.frameworks.delete(framework);
      return this;
    };
  }
