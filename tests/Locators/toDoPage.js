this.taskSearch = element(by.id('todo-input'));
this.taskDropDown = element(by.css('input[class="toggle-all"]'));
this.taskChkBox = element(by.xpath('//input[@type="checkbox"]//following-sibling::label[contains(.,"'+taskName+'")]'));
this.noOfItmsLeft = element(by.css('span[class="todo-count"]'));
this.allBtn = element.all(by.css('ul[class="filters"] li a')).get(0);
this.activeBtn = element.all(by.css('ul[class="filters"] li a')).get(1);
this.compltdBtn = element.all(by.css('ul[class="filters"] li a')).get(2);
this.clearCmpltd = elelemtn(by.css('button[class="clear-completed"]'));