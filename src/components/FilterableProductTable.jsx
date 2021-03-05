import React, { Component } from 'react'
import datajson from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  state = {
    products: datajson.data
  }

  onSearch = e => {
    const query = e.target.value
    const regExp = RegExp(query,'i')
    // const productsCopy = [...this.state.products]
    const filtered = datajson.data.filter(p => regExp.test(p.name))
    this.setState({ products:filtered })
  }

  showStock = e => {
    const show = e.target.checked
    if(show) {
      const filtered = this.state.products.filter(p => p.stocked)
      this.setState({ products:filtered })
    }
  }
  render() {
    const { products } = this.state
    const { onSearch, showStock } = this
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar onChange={onSearch} showStock={showStock} />
        <ProductTable products={products} />
      </div>
    )
  }
}

export default FilterableProductTable