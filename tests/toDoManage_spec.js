

var pageTitle = element(by.css('header[class="header"]'));
var taskSearch = element(by.id('id="todo-input'));
var toDoListDrpdown = element(by.css('ul[class="todo-list"]'));
var toDoItems = element.all(by.css('ul[class="todo-list"] li'));
var toDoItemRadioBtn = element.all(by.css('ul[class="todo-list"] li input[type = "checkbox"]'));
var noOfItemsLeft = element(by.css('span[class="todo-count"]'));
var taskComplTickMark = element.all(by.css('ul[class="todo-list"] li[class="completed"]'));
var toDo_all= elementa.all(by.css('ul[class="filters"] a')).get(0);
var toDo_active= elementa.all(by.css('ul[class="filters"] a')).get(1);
var toDo_completed= elementa.all(by.css('ul[class="filters"] a')).get(2);
var toDo_clearCmpltd = element(by.css('button[class="clear-completed"]'));

//radio button element by passing taskname as argument
var taskChkBox = element(by.xpath('//input[@type="checkbox"]//following-sibling::label[contains(.,"'+taskName+'")]'));

describe('Todo Page Manage', () => {

  beforeAll(async () => {
      // Navigate to the application URL
      await browser.get('https://todomvc.com/examples/react/dist/');
  });

  it('It should allow the user to access the todos page', async () => {
      // Verify that the todos page is loaded and check the title of the page
      expect( pageTitle.getText()).toBe('todos');
  });

  it('It should allow the user to add a new task', async () => {

      // Adding a  task1
       taskSearch.sendKeys('Automation', protractor.Key.ENTER);

      // Verify that the new task appears in the list after clicking on ENTER
      expect(toDoListDrpdown.isPresent).toBe(true);
      expect(toDoItems.get(0).getText()).toContain('Automation');

    // Adding a  task2
    taskSearch.sendKeys('Manual Testing', protractor.Key.ENTER);

    // Verify that the new task appears in the list after clicking on ENTER
    expect(toDoListDrpdown.isPresent).toBe(true);
    expect(toDoItems.get(0).getText()).toContain('Manual Testing');

  });

  it('It should allow the user to mark a task as completed', async () => {

      //to click on the first task radio button
       toDoItemRadioBtn.get(0).click();

      // Verify that the task is marked as completed
      expect(taskComplTickMark.get(0).isPresent()).toBe(true);


      // Verify that the second ask is not marked as completed
      expect(taskComplTickMark.isPresent()).toBe(false);
  });

  it('should allow the user to filter active tasks', async () => {
      // Click on the Active filter
       toDo_active.click();

      // Verify that no tasks are displayed since the task is completed
      const visibleTasks = element.all(by.css('.todo-list li')); 
      expect(await visibleTasks.count()).toBe(0);
  });

  it('should allow the user to filter completed tasks', async () => {
      // Click on the Completed filter
      const completedFilter = element(by.cssContainingText('.filters li a', 'Completed'));
      await completedFilter.click();

      // Verify that the completed task is displayed
      const completedTasks = element.all(by.css('.todo-list li.completed'));
      expect(await completedTasks.count()).toBe(1);
  });

  it('should allow the user to delete a task', async () => {
      // Hover over the task to reveal the delete button
      const firstTask = element(by.css('.todo-list li'));
      const deleteButton = firstTask.element(by.css('.destroy'));

      // Use browser actions to hover and click delete
      await browser.actions().mouseMove(firstTask).perform();
      await deleteButton.click();

      // Verify that the task is removed
      const remainingTasks = element.all(by.css('.todo-list li'));
      expect(await remainingTasks.count()).toBe(0);
  });
});









