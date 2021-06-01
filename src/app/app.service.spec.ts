import {TestBed} from '@angular/core/testing';
import {AppService} from './app.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      AppService
    ]
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from /repository API call', () => {
    const appService = TestBed.get(AppService);
    const http = TestBed.get(HttpTestingController);
    // fake response
    const expectedData = [{
      id: 96121448,
      node_id: 'MDEwOlJlcG9zaXRvcnk5NjEyMTQ0OA==',
      name: 'SunbirdEd-portal',
      full_name: 'Sunbird-Ed/SunbirdEd-portal',
      private: false,
      owner: {
        login: 'Sunbird-Ed',
        id: 44048170,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ0MDQ4MTcw',
        avatar_url: 'https://avatars.githubusercontent.com/u/44048170?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Sunbird-Ed',
        html_url: 'https://github.com/Sunbird-Ed',
        followers_url: 'https://api.github.com/users/Sunbird-Ed/followers',
        following_url: 'https://api.github.com/users/Sunbird-Ed/following{/other_user}',
        gists_url: 'https://api.github.com/users/Sunbird-Ed/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Sunbird-Ed/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Sunbird-Ed/subscriptions',
        organizations_url: 'https://api.github.com/users/Sunbird-Ed/orgs',
        repos_url: 'https://api.github.com/users/Sunbird-Ed/repos',
        events_url: 'https://api.github.com/users/Sunbird-Ed/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Sunbird-Ed/received_events',
        type: 'Organization',
        site_admin: false
      },
      html_url: 'https://github.com/Sunbird-Ed/SunbirdEd-portal',
      description: 'Web Portal for sunbird software. Provides the web interfaces for all functionality of Sunbird. Find the installation instructions at: http://www.sunbird.org/developer-docs/installation/',
      fork: false,
      url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal',
      forks_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/forks',
      keys_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/teams',
      hooks_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/hooks',
      issue_events_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/events',
      assignees_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/assignees{/user}',
      branches_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/tags',
      blobs_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/languages',
      stargazers_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/stargazers',
      contributors_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/contributors',
      subscribers_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/subscribers',
      subscription_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/subscription',
      commits_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/contents/{+path}',
      compare_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/merges',
      archive_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/downloads',
      issues_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/labels{/name}',
      releases_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/releases{/id}',
      deployments_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-portal/deployments',
      created_at: '2017-07-03T14:47:48Z',
      updated_at: '2021-05-06T11:41:11Z',
      pushed_at: '2021-05-31T15:20:32Z',
      git_url: 'git://github.com/Sunbird-Ed/SunbirdEd-portal.git',
      ssh_url: 'git@github.com:Sunbird-Ed/SunbirdEd-portal.git',
      clone_url: 'https://github.com/Sunbird-Ed/SunbirdEd-portal.git',
      svn_url: 'https://github.com/Sunbird-Ed/SunbirdEd-portal',
      homepage: '',
      size: 310796,
      stargazers_count: 20,
      watchers_count: 20,
      language: 'TypeScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 171,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 147,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 171,
      open_issues: 147,
      watchers: 20,
      default_branch: 'master',
      permissions: {
        admin: false,
        push: false,
        pull: true
      }
    }, {
      id: 131278502,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMzEyNzg1MDI=',
      name: 'SunbirdEd-mobile',
      full_name: 'Sunbird-Ed/SunbirdEd-mobile',
      private: false,
      owner: {
        login: 'Sunbird-Ed',
        id: 44048170,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjQ0MDQ4MTcw',
        avatar_url: 'https://avatars.githubusercontent.com/u/44048170?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Sunbird-Ed',
        html_url: 'https://github.com/Sunbird-Ed',
        followers_url: 'https://api.github.com/users/Sunbird-Ed/followers',
        following_url: 'https://api.github.com/users/Sunbird-Ed/following{/other_user}',
        gists_url: 'https://api.github.com/users/Sunbird-Ed/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Sunbird-Ed/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Sunbird-Ed/subscriptions',
        organizations_url: 'https://api.github.com/users/Sunbird-Ed/orgs',
        repos_url: 'https://api.github.com/users/Sunbird-Ed/repos',
        events_url: 'https://api.github.com/users/Sunbird-Ed/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Sunbird-Ed/received_events',
        type: 'Organization',
        site_admin: false
      },
      html_url: 'https://github.com/Sunbird-Ed/SunbirdEd-mobile',
      description: 'Mobile app for sunbird software. Provides the mobile interfaces for all functionality of Sunbird.',
      fork: false,
      url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile',
      forks_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/forks',
      keys_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/teams',
      hooks_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/hooks',
      issue_events_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/events',
      assignees_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/assignees{/user}',
      branches_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/tags',
      blobs_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/languages',
      stargazers_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/stargazers',
      contributors_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/contributors',
      subscribers_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/subscribers',
      subscription_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/subscription',
      commits_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/contents/{+path}',
      compare_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/merges',
      archive_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/downloads',
      issues_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/labels{/name}',
      releases_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/releases{/id}',
      deployments_url: 'https://api.github.com/repos/Sunbird-Ed/SunbirdEd-mobile/deployments',
      created_at: '2018-04-27T09:53:30Z',
      updated_at: '2019-09-25T18:44:34Z',
      pushed_at: '2019-11-14T05:33:33Z',
      git_url: 'git://github.com/Sunbird-Ed/SunbirdEd-mobile.git',
      ssh_url: 'git@github.com:Sunbird-Ed/SunbirdEd-mobile.git',
      clone_url: 'https://github.com/Sunbird-Ed/SunbirdEd-mobile.git',
      svn_url: 'https://github.com/Sunbird-Ed/SunbirdEd-mobile',
      homepage: null,
      size: 30108,
      stargazers_count: 6,
      watchers_count: 6,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 37,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 3,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz'
      },
      forks: 37,
      open_issues: 3,
      watchers: 6,
      default_branch: 'master',
      permissions: {
        admin: false,
        push: false,
        pull: true
      }
    }];

    let actualData: any = [];
    const params = {per_page: 10, page: 1};
    const reqUrl = `/orgs/Sunbird-Ed/repos`;
    appService.getRepositoryData(reqUrl, params).subscribe((repos: any) => {
      actualData = repos;
    });

    http.expectOne('https://api.github.com/orgs/Sunbird-Ed/repos?per_page=10&page=1').flush(expectedData);
    expect(actualData).toEqual(expectedData);
  });
});
