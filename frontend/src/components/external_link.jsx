import * as React from 'react';

export default function ExternalLink({ children, url }) {
  return (
    <a href={url} target="_blank" rel="noopener">
       {children}
    </a>
  );
}