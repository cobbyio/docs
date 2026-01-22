import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css';

const workspaceTopics = [
  {
    emoji: '👥',
    title: 'Invite Team Members',
    description: 'Add team members to your cobby workspace so they can collaborate on product management.',
    link: './invite-team-members',
  },
  {
    emoji: '🔐',
    title: 'Manage User Permissions',
    description: 'Change user rights between member and owner roles to control access to workspace settings.',
    link: './manage-permissions',
  },
  {
    emoji: '🔄',
    title: 'Manage Multiple Workspaces',
    description: 'Connect multiple cobby workspaces to the same Excel installation and switch between them.',
    link: './manage-multiple-workspaces',
  },
  {
    emoji: '✉️',
    title: 'Change Your Email Address',
    description: 'Update the email address associated with your cobby workspace account.',
    link: './change-email-address',
  },
  {
    emoji: '⚙️',
    title: 'Configure Workspace Settings',
    description: 'Customize your cobby workspace settings including name and general preferences.',
    link: './configure-workspace',
  },
  {
    emoji: '🚫',
    title: 'Cancel Your Account',
    description: 'Cancel your cobby subscription and close your account when you no longer need the service.',
    link: './cancel-account',
  },
];

export default function WorkspaceCards() {
  return (
    <section className="row">
      {workspaceTopics.map((item, idx) => (
        <article key={idx} className="col col--6 margin-bottom--lg">
          <Link
            to={item.link}
            className={clsx('card padding--lg', styles.cardContainer)}
            style={{ height: '100%' }}
          >
            <h2 className={clsx('text--truncate', styles.cardTitle)} title={item.title}>
              <span style={{ marginRight: '0.5rem' }}>{item.emoji}</span>
              {item.title}
            </h2>
            <p className={clsx('text--truncate', styles.cardDescription)} title={item.description}>
              {item.description}
            </p>
          </Link>
        </article>
      ))}
    </section>
  );
}
