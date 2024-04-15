import { useRouteMeta, useIntl, FormattedMessage } from 'dumi';
import { EditOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import useAdditionalThemeConfig from '../hooks/useAdditionalThemeConfig';
import useSiteToken from '../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  const { marginXXS } = token;

  return {
    editLink: css`
      display: flex;
      gap: ${marginXXS}px;
    `
  };
};

const EditLink = () => {
  const styles = useStyle();
  const { frontmatter } = useRouteMeta();
  const { editLink } = useAdditionalThemeConfig();
  const intl = useIntl();

  const showEditLink = editLink && frontmatter.filename;
  return (
    showEditLink && (
      <div>
        <a
          target="_blank"
          href={`${intl.formatMessage(
            { id: '$internal.edit.link' },
            { filename: frontmatter.filename }
          )}`}
          rel="noreferrer"
          css={styles.editLink}
        >
          <EditOutlined />
          <FormattedMessage id="app.footer.actions.edit" />
        </a>
      </div>
    )
  );
};

export default EditLink;
