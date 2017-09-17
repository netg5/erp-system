import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { 
  Header,
  DepartmentList,
  DepartmentForm,
} from './../components'

class Department extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Department</title>
        </Helmet>
        <Header heading="Department" />
        <div className="panel">
          <h3 className="panel__heading">Department</h3>
          <div className="panel__body">
            <DepartmentList departments={[]} />
          </div>
        </div>
        <DepartmentForm />
      </div>
    ) 
  }
}

export default Department
