var activeDropdownId = null;
      
      function toggleDropdown(dropdownId) {
        var dropdown = document.getElementById(dropdownId);
        
        if (activeDropdownId !== null && activeDropdownId !== dropdownId) {
          var activeDropdown = document.getElementById(activeDropdownId);
          activeDropdown.style.display = 'none';
        }
        
        if (dropdown.style.display === 'none') {
          dropdown.style.display = 'block';
          activeDropdownId = dropdownId;
        } else {
          dropdown.style.display = 'none';
          activeDropdownId = null;
        }
      }