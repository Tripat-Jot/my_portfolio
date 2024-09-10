// SoftwareEngineerCode.js

const SoftwareEngineerCode = `
// Define a class for representing a software engineer
class SoftwareEngineer {
  string name;
  int graduationYear;
  int experienceYears;
  string[] techStack;
  string[] interests;

  // Constructor to initialize the engineer's details
  constructor(name, graduationYear, experienceYears, techStack, interests) {
    this.name = name;
    this.graduationYear = graduationYear;
    this.experienceYears = experienceYears;
    this.techStack = techStack;
    this.interests = interests;
  }

  // Method to display work experience, tech stack, and C++ interest
  method displayDetails() {
    print("Name: " + this.name);
    print("Graduation Year: " + this.graduationYear);
    print("Experience Years: " + this.experienceYears);
    print("Tech Stack:");
    foreach (tech in this.techStack) {
      print("- " + tech);
    }
    print("Interests:");
    foreach (interest in this.interests) {
      print("- " + interest);
    }
    // Example of C++ specific interest
    if (this.interests.contains("C++")) {
      print("I have a strong interest in C++ and enjoy working with its features.");
    }
  }
}

// Example usage
function main() {
  // Define a software engineer instance
  engineer = new SoftwareEngineer(
    "User",
    2023, // Graduation year
    1,    // Experience years
    ["Django REST Framework", "MySQL", "MongoDB"],
    ["System design", "Data structures and algorithms", "C++"]
  );

  // Display details using the method
  engineer.displayDetails();
}

# Factory Pattern to create Developers and Projects
class DeveloperFactory:
    @staticmethod
    def create_developer(name):
        return Developer(name)

    @staticmethod
    def create_project(project_name):
        return Project(project_name)

# Observer Pattern to notify developers of new tasks
class Observer:
    def update(self, task):
        pass

class Developer(Observer):
    def __init__(self, name):
        self.name = name
        self.skills = []
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)
        print(f"{self.name} received new task: {task.task_name}")

    def learn_skill(self, skill):
        self.skills.append(skill)
        print(f"{self.name} learned new skill: {skill}")

    def complete_task(self, task):
        if task in self.tasks:
            self.tasks.remove(task)
            print(f"{self.name} completed task: {task.task_name}")
        else:
            print(f"{task.task_name} not found in {self.name}'s task list.")

    def update(self, task):
        self.add_task(task)

class Task:
    def __init__(self, task_name, description, skill_required):
        self.task_name = task_name
        self.description = description
        self.skill_required = skill_required

    def complete(self, developer):
        if self.skill_required in developer.skills:
            print(f"{developer.name} completed task: {self.task_name}")
        else:
            print(f"{developer.name} does not have the skill: {self.skill_required} to complete this task.")

class Project:
    def __init__(self, project_name):
        self.project_name = project_name
        self.tasks = []
        self.developers = []

    def add_task(self, task):
        self.tasks.append(task)
        self.notify(task)

    def assign_developer(self, developer):
        self.developers.append(developer)

    def notify(self, task):
        for developer in self.developers:
            developer.update(task)

# Strategy Pattern for applying skills to complete tasks
class SkillStrategy:
    def apply_skill(self, developer, task):
        pass

class BasicSkillStrategy(SkillStrategy):
    def apply_skill(self, developer, task):
        if task.skill_required in developer.skills:
            print(f"{developer.name} used basic skills to complete task: {task.task_name}")
        else:
            print(f"{developer.name} doesn't have the required skill: {task.skill_required}")

class AdvancedSkillStrategy(SkillStrategy):
    def apply_skill(self, developer, task):
        if task.skill_required in developer.skills:
            print(f"{developer.name} used advanced skills to complete task: {task.task_name}")
        else:
            print(f"{developer.name} doesn't have the required skill: {task.skill_required}")

# Singleton Pattern to manage tasks globally
class TaskManager:
    _instance = None

    def __init__(self):
        if not TaskManager._instance:
            self._tasks = []
        else:
            raise Exception("Task Manager is a singleton class!")

    @staticmethod
    def get_instance():
        if not TaskManager._instance:
            TaskManager._instance = TaskManager()
        return TaskManager._instance

    def add_task(self, task):
        self._tasks.append(task)

    def get_tasks(self):
        return self._tasks

# Example Usage
if __name__ == "__main__":
    # Create Developers and Projects using Factory Pattern
    dev1 = DeveloperFactory.create_developer("Alice")
    dev2 = DeveloperFactory.create_developer("Bob")
    project = DeveloperFactory.create_project("AI Development")

    # Assign developers to project
    project.assign_developer(dev1)
    project.assign_developer(dev2)

    # Developers learn new skills
    dev1.learn_skill("Python")
    dev2.learn_skill("Machine Learning")

    # Create tasks and notify developers (Observer Pattern)
    task1 = Task("Write Python Script", "Develop a script in Python", "Python")
    task2 = Task("Build AI Model", "Create an AI model", "Machine Learning")

    project.add_task(task1)
    project.add_task(task2)

    # Developers complete tasks with skill strategies (Strategy Pattern)
    basic_strategy = BasicSkillStrategy()
    advanced_strategy = AdvancedSkillStrategy()

    basic_strategy.apply_skill(dev1, task1)  # Alice should complete it
    advanced_strategy.apply_skill(dev2, task2)  # Bob should complete it

    # Using Task Manager (Singleton Pattern) to manage tasks globally
    task_manager = TaskManager.get_instance()
    task_manager.add_task(task1)
    task_manager.add_task(task2)

    print("\nAll tasks in Task Manager:")
    for task in task_manager.get_tasks():
        print(task.task_name)

`;

export default SoftwareEngineerCode;
