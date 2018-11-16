// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newStatus = $(this).data("newstatus");

    var newSleepState = {
      done: newStatus
    };

    // Send the PUT request.
    $.ajax("/api/items/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed status to", newStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newItem = {
      name: $("#td").val().trim(),
      done: $("[name=done]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/items", {
      type: "POST",
      data: newItem
    }).then(
      function() {
        console.log("created new item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-item").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/items/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted item", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

