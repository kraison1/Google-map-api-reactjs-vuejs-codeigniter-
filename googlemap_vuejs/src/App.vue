<template>
  <div id="app">
    <!-- input location -->
    <input id="autocomplete" class="form-control text-center" type="text" value="เขตบางซื่อ Bangkok, Thailand" />
    <!-- end input location -->

    <!-- display google map api -->
    <div id="map"></div>
    <!-- end display google map api -->

    <!-- list restaurant search -->
    <div id="listing">
      <table id="resultsTable">
        <tbody id="results"></tbody>
      </table>
    </div>
    <div style="display: none">
      <div id="info-content">
        <table>
          <tr id="iw-url-row" class="iw_table_row">
            <td id="iw-icon" class="iw_table_icon"></td>
            <td id="iw-url"></td>
          </tr>
          <tr id="iw-address-row" class="iw_table_row">
            <td class="iw_attribute_name">ที่อยู่:</td>
            <td id="iw-address"></td>
          </tr>
          <tr id="iw-phone-row" class="iw_table_row">
            <td class="iw_attribute_name">เบอร์โทร:</td>
            <td id="iw-phone"></td>
          </tr>
          <tr id="iw-rating-row" class="iw_table_row">
            <td class="iw_attribute_name">คะแนน:</td>
            <td id="iw-rating"></td>
          </tr>
          <tr id="iw-website-row" class="iw_table_row">
            <td class="iw_attribute_name">เว็บไซต์:</td>
            <td id="iw-website"></td>
          </tr>
        </table>
      </div>
    </div>
    <!-- end list restaurant search -->
  </div>
</template>


<style>
/* Always set the map height explicitly to define the size of the div
   * element that contains the map. */
#map {
  position: fixed !important;
  height: 100%;
  width: 100%;
}

/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  padding: 0 !important;
}

table {
  font-size: 12px;
}

#listing {
  position: absolute;
  width: 200px;
  height: 470px;
  overflow: auto;
  left: 442px;
  top: 0px;
  cursor: pointer;
  overflow-x: hidden;
}

#findhotels {
  font-size: 14px;
}

#locationField {
  -webkit-box-flex: 1 1 190px;
  -ms-flex: 1 1 190px;
  flex: 1 1 190px;
  margin: 0 8px;
}

#controls {
  -webkit-box-flex: 1 1 140px;
  -ms-flex: 1 1 140px;
  flex: 1 1 140px;
}

#autocomplete {
  width: 100%;
}

#country {
  width: 100%;
}

.placeIcon {
  width: 20px;
  height: 34px;
  margin: 4px;
}

.hotelIcon {
  width: 24px;
  height: 24px;
}

#resultsTable {
  border-collapse: collapse;
  width: 240px;
}

#rating {
  font-size: 13px;
  font-family: Arial Unicode MS;
}

.iw_table_row {
  height: 18px;
}

.iw_attribute_name {
  font-weight: bold;
  text-align: right;
}

.iw_table_icon {
  text-align: right;
}

</style>
