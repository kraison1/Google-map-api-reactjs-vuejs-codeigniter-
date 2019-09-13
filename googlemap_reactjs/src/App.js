import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* input location */}
      <input id="autocomplete" class="form-control text-center" type="text" value={this} placeholder="เขตบางซื่อ Bangkok, Thailand" />
      {/* end input location */}

      {/* display google map api */}
      <div id="map"></div>
      {/* end display google map api */}

      {/* <!-- list restaurant search --> */}
      <div id="listing">
        <table class="table" id="resultsTable">
          <tbody id="results"></tbody>
        </table>
      </div>
      <div style={{ display: 'none' }}>
        <div id="info-content">
          <table >
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
      {/* <!-- end list restaurant search --> */}
    </div>
  );
}

export default App;
