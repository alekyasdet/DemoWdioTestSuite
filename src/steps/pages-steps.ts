import {Given, Then} from "@wdio/cucumber-framework";
import openUrl from "../support/action/openUrl";
import setInputValue from "../support/action/setInputValue";
import clickElement from "../support/action/clickElement";
import pauseExecution from "../support/action/pauseExecution";
import checkElementState from "../support/check/checkElementState";
import checkElementContainsText from "../support/check/checkElementContainsText";

Given(/^user navigate to the website "(.*)"$/, openUrl);

Given(/^user enters "(.*)" into the input field "(.*)"$/, setInputValue);

Given(/^user will click the "(.*)"$/, clickElement);

Then(/^user pause for "(.*)" ms$/, pauseExecution);

Given(/^user expect "(.*)" to be "(.*)"$/, checkElementState)

Given(/^user expect "(.*)" to contain "(.*)"$/, checkElementContainsText)