class TableModel {
  constructor(numCols=10, numRows=20) {
  	this.numCols = numCols;
  	this.numRows = numRows;
  	this.data = {};
  }

  _getCellId(location) {
  	return `${location.col}:${location.row}`;
  }

  getValue(location) {
  	return this.data[this._getCellId(location)];
  }

  setValue(location, value) {
  	this.data[this._getCellId(location)] = value;
  }

  getColumnValue(location) {
    let columnValue = 0;
    for(let row = 0; row < this.numRows; row++) {
      location.row = row;
      if(parseInt(this.getValue(location))){ 
        columnValue += parseInt(this.getValue(location));
      }
    }
    return columnValue;
  }
}

module.exports = TableModel;