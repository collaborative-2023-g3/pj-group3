// NOTIE : このファイルは触らないでください
// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import Top from './pages/Top';

const root = createRoot(document.getElementById('root'));
root.render(<Top />);
