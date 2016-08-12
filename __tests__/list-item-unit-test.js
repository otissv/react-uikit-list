'use strict';
import test from 'tape';
import ListItem from '../lib/list-item';
import React from 'react';
import renderElement from './helpers/renderElement';


test('list-group Component', nested => {
  nested.test('Renders list item component:',
    assert => {
      const Compoent = <ListItem kitid='l1' body='Item' />;
      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<li data-kitid="l1"> Item </li>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a list item element.');

      assert.end();
    });


  nested.test('Renders list link item component with badge:',
    assert => {
      const Compoent = <ListItem
        kitid='l1'
        body='Item'
        badge={{body: '2', notification: true}}
        href='#'
      />;

      const listGroup = renderElement(Compoent).dom();

      const actual = listGroup.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<li href="#" data-kitid="l1">' +
        '<a style="display:block;" href="#">' +
          ' Item <span class="uk-badge uk-float-right uk-badge-notification" data-kitid="badge-l1">2</span>' +
        '</a>' +
      '</li>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'correctly renders a list item element.');

      assert.end();
    });


  nested.test('selectable prop:',
    assert => {
      const items = {href: '#', kitid: 'ki1', body: 'Item 1'};

      const listItem = renderElement(<ListItem
        kitid='ki1'
        selectable={{
          checked: {
            on:  <i className={'uk-icon-check-circle'}></i>,
            off: <i className={'uk-icon-circle-o'}></i>
          }
        }}
        {...items}
      />).dom();

      const actual = listItem.html();

      /* eslint-disable smells/no-complex-string-concat */
      const expect = '<li href="#" data-kitid="ki1">' +
        '<a style="display:block;" href="#">' +
          '<i class="uk-icon-circle-o"></i>' +
          ' Item 1 ' +
        '</a>' +
      '</li>';
      /* eslint-enable no-complex-string-concat */

      assert.equals(actual, expect,
        'Adds active class to list item element.');

      assert.end();
    });
});
