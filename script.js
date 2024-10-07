document.addEventListener('DOMContentLoaded', () => {
    // Function to add a new task
    const addTask = (taskDescription) => {
        const tasksList = document.getElementById('tasks');
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskDescription;
        tasksList.appendChild(newTaskItem);
    };

    // Existing tasks (optional: adjust based on your needs)
    const existingTasks = ['Task 1', 'Task 2', 'Task 3'];
    existingTasks.forEach(addTask); // Add existing tasks to the list

    // Event listener for form submission
    document.getElementById('create-task-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const taskInput = document.getElementById('new-task-description');
        const taskDescription = taskInput.value.trim();

        if (taskDescription) {
            addTask(taskDescription); // Use the function to add the new task
            taskInput.value = ''; // Clear the input field
        }
    });
});


