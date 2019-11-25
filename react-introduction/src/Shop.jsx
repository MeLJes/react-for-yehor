import React from 'react'

let categories = [
  { id: 'vegs', name: 'Vegetables' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'tools', name: 'Tools' },
]

let productsList = [
  { id: 1, name: 'Tomato', categoryId: 'vegs' },
  { id: 2, name: 'Apple', categoryId: 'fruits' },
  { id: 3, name: 'Cucumber', categoryId: 'vegs' },
  { id: 4, name: 'Mouse', categoryId: 'tools' },
  { id: 5, name: 'Potato', categoryId: 'vegs' },
  { id: 6, name: 'Carrot', categoryId: 'vegs' },
  { id: 7, name: 'Onion', categoryId: 'vegs' },
]

export default class Shop extends React.Component {
  state = {
    currentCategoryId: 0,
  }

  handleChange = (e) => {
    this.setState({ currentCategoryId: e.target.value })
  }

  render () {
    let products = this.state.currentCategoryId === 0
      ? productsList
      : productsList.filter(
        p => p.categoryId === this.state.currentCategoryId
      )

    return (
      <div>
        <h2>Shop</h2>
        <select onChange={this.handleChange}>
          <option value={0}>Choose category</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <ProductList products={products} />
      </div>
    )
  }
}

function ProductList ({ products }) {
  return (
    <div>
      {products.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  )
}
