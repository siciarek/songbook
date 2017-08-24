import React from 'react'
import {renderComponent, renderShallowComponent, getProps} from '../../utils/testHelper'
import AppAppBar from './AppAppBar'

describe('AppAppBar', () => {
  let element = null

  beforeEach(() => {
    element = <AppAppBar/>
  })

  it('can render without error', () => {
    expect(() =>  { const component = renderComponent(element)}).not.toThrow()
  })
})