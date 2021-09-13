/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { controllable } from '@instructure/ui-prop-types'

import type { PropValidators } from '@instructure/shared-types'
import type { WithStyleProps } from '@instructure/emotion'

type ToggleDetailsOwnProps = {
  variant?: 'default' | 'filled'
  summary: React.ReactNode
  expanded?: any // TODO: controllable(PropTypes.bool, 'onToggle', 'defaultExpanded')
  defaultExpanded?: boolean
  onToggle?: (...args: any[]) => any
  icon?: (...args: any[]) => any
  iconExpanded?: (...args: any[]) => any
  iconPosition?: 'start' | 'end'
  fluidWidth?: boolean
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
}

type PropKeys = keyof ToggleDetailsOwnProps

type AllowedPropKeys = Readonly<Array<PropKeys>>

type ToggleDetailsProps = ToggleDetailsOwnProps & WithStyleProps

const propTypes: PropValidators<PropKeys> = {
  variant: PropTypes.oneOf(['default', 'filled']),
  /**
   * The summary that displays and can be interacted with
   */
  summary: PropTypes.node.isRequired,
  /**
   * Whether the content is expanded or hidden
   */
  expanded: controllable(PropTypes.bool, 'onToggle', 'defaultExpanded'),
  /**
   * Whether the content is initially expanded or hidden (uncontrolled)
   */
  defaultExpanded: PropTypes.bool,
  onToggle: PropTypes.func,
  /**
   * The icon to display next to the summary text when content is hidden
   */
  icon: PropTypes.func,
  /**
   * The icon to display when content is expanded
   */
  iconExpanded: PropTypes.func,
  /**
   * Icon position at the start or end of the summary text
   */
  iconPosition: PropTypes.oneOf(['start', 'end']),
  /**
   * should the summary fill the width of its container
   */
  fluidWidth: PropTypes.bool,
  /**
   * The toggleable content passed inside the ToggleDetails component
   */
  children: PropTypes.node,
  /**
   * Choose a size for the expand/collapse icon
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

const allowedProps: AllowedPropKeys = [
  'variant',
  'summary',
  'expanded',
  'defaultExpanded',
  'onToggle',
  'icon',
  'iconExpanded',
  'iconPosition',
  'fluidWidth',
  'children',
  'size'
]

export type { ToggleDetailsProps }
export { propTypes, allowedProps }

export type ToggleDetailsStyleProps = {
  animate: boolean
}