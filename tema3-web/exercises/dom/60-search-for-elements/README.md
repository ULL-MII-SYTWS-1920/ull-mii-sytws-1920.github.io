# Search for elements

Exercise from [https://javascript.info/searching-elements-dom#tasks](https://javascript.info/searching-elements-dom#tasks)

Here’s the document with the table and form.

```html

<!DOCTYPE HTML>
<html>
<body>
  <form name="search">
    <label>Search the site:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Search!">
  </form>

  <hr>

  <form name="search-person">
    Search the visitors:
    <table id="age-table">
      <tr>
        <td>Age:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">less than 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">more than 50</label>
        </td>
      </tr>

      <tr>
        <td>Additionally:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Search!">
  </form>
</body>
</html>
```

## How to find?…

- The table with id="age-table".
- All label elements inside that table (there should be 3 of them).
- The first td in that table (with the word “Age”).
- The form with name="search".
- The first input in that form.
- The last input in that form.
 
Make use of browser tools for that.
