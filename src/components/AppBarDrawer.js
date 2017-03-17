import React, { Component, PropTypes } from 'react';
import withWidth, { SMALL } from 'material-ui/utils/withWidth';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CommunicationForum from 'material-ui/svg-icons/communication/forum';
import ActionTranslate from 'material-ui/svg-icons/action/translate';
import ActionList from 'material-ui/svg-icons/action/list';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import GitHub from '../icons/GitHub';
import Divider from 'material-ui/Divider';

const SelectableList = makeSelectable(List);

class AppBarDrawerComponent extends Component {

  static propTypes = {
    status: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    version: PropTypes.string.isRequired,
    versions: PropTypes.array.isRequired,
    language: PropTypes.string,
    languages: PropTypes.array.isRequired,
    summary: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired,
    handleCloseAppBar: PropTypes.func.isRequired,
    handleRequestHome: PropTypes.func.isRequired,
    handleRequestMarkdown: PropTypes.func.isRequired,
  };

  getAppBarSummary(summary) {

    const { version, language } = this.props;

    return summary.map(({ name, md, item = [] }) => {
      const isNested = !!item.length;
      const value = `/${version}/${language}/${md}`;
      let params = { key: value, value, primaryText: name };

      if (isNested) {
        const key = `/${version}/${language}/${name}`;
        params = { ...params, key, primaryTogglesNestedList: true, nestedItems: this.getAppBarSummary(item) };
      }

      return (<ListItem {...params} />);
    });
  }

  render() {

    const {
      width, status, version, versions, language, languages, summary, pathname,
      handleCloseAppBar, handleRequestHome, handleRequestMarkdown,
    } = this.props;

    const appBarSummary = this.getAppBarSummary(summary);

    return (
      <Drawer
        open={status}
        docked={width !== SMALL}
        width={256}
        onRequestChange={handleCloseAppBar}
      >
        <AppBar
          title=" Fans"
          iconElementLeft={
            <IconButton>
              <NavigationClose />
            </IconButton>
          }
          onLeftIconButtonTouchTap={handleCloseAppBar}
          onTitleTouchTap={handleRequestHome}
          zDepth={0}
          titleStyle={{
            cursor: 'pointer'
          }}
        />

        <List>
          <ListItem
            primaryText={`Version: ${version}`}
            leftIcon={<ActionList />}
            primaryTogglesNestedList={true}
            nestedItems={versions.map(version => (
              <ListItem
                key={version}
                primaryText={version}
              />
            ))}
          />
          <ListItem
            primaryText={`Language: ${language}`}
            leftIcon={<ActionTranslate />}
            primaryTogglesNestedList={true}
            nestedItems={languages.map(language => (
              <ListItem
                key={`${version}/${language}`}
                primaryText={language}
              />
            ))}
          />
        </List>

        <Divider />

        <SelectableList value={pathname} onChange={({}, md) => handleRequestMarkdown(md, width === SMALL)} >
          {appBarSummary}
        </SelectableList>

        <Divider />

        <List>
          <Subheader>更多</Subheader>
          <ListItem
            containerElement="a"
            primaryText="GitHub"
            href="https://github.com/medz/phpwind/fork"
            leftIcon={<GitHub />}
          />
          <ListItem
            containerElement="a"
            primaryText="New issue"
            href="https://github.com/medz/phpwind/issues/new"
            leftIcon={<CommunicationForum />}
          />
        </List>

      </Drawer>
    );
  }
}

export default withWidth()(AppBarDrawerComponent);
