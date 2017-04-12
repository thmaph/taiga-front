/*
 * Copyright (C) 2014-2017 Taiga Agile LLC <taiga@taiga.io>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: profile-tabs.controller.spec.coffee
 */

declare var describe:any;
declare var angular:any;
let module = angular.mock.module;;
declare var inject:any;
declare var it:any;
declare var expect:any;
declare var beforeEach:any;
import * as Immutable from "immutable"
declare var sinon:any;

describe("ProfileTabsController", function() {
    let scope;
    let myCtrl = (scope = null);

    beforeEach(function() {
        module("taigaProfile");

        return inject(function($controller) {
            scope = {};
            return myCtrl = $controller("ProfileTabs",
                {$scope: scope});
        });
    });

    it("tabs should be an array", () => expect(myCtrl.tabs).is.an("array"));

    it("add new tab", function() {
        let tab = {"fakeTab": true};

        myCtrl.addTab(tab);

        return expect(myCtrl.tabs[0]).to.be.eql(tab);
    });

    return it("toggleTab, mark the tab passed as parameter to active", function() {
        let fakeTabs = [
            {id: 1},
            {id: 2},
            {id: 3}
        ];

        myCtrl.tabs = fakeTabs;

        myCtrl.toggleTab(fakeTabs[1]);

        expect(myCtrl.tabs[0].active).to.be.false;
        expect(myCtrl.tabs[1].active).to.be.true;
        expect(myCtrl.tabs[2].active).to.be.false;

        myCtrl.toggleTab(fakeTabs[0]);

        expect(myCtrl.tabs[0].active).to.be.true;
        expect(myCtrl.tabs[1].active).to.be.false;
        return expect(myCtrl.tabs[2].active).to.be.false;
    });
});