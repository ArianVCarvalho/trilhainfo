import ButtonElement from './ButtonElement';
import domtoimage from 'dom-to-image';
import { MutableRefObject } from 'react';
import { Button, ButtonArgs } from './types';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

type RoadmapButtonsProps = {
  buttons: Button[];
  roadmapRef: MutableRefObject<null>;
  title: string;
  roadmapPath: string;
};

const RoadmapButtons = ({ buttons, roadmapRef, title, roadmapPath }: RoadmapButtonsProps) => {
  const handleDownloadImage = async () => {
    const element = roadmapRef.current || document.body;
    const data = await domtoimage.toPng(element);

    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `trilha${title}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const handleExportNotes = async () => {
    const response = await axios.get<string>(import.meta.env.VITE_API_URL + `/note/export` || '', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: cookies.get('api_token'),
      },
    });

    const mdText = response.data;

    const element = document.createElement('a');
    const file = new Blob([mdText], {
      type: 'text/plain;charset=utf-8',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'notes.md';
    document.body.appendChild(element);
    element.click();
  };

  const BUTTON_ACTIONS: Map<Button, ButtonArgs> = new Map([
    [
      'verticalView',
      {
        text: 'Visualizar Verticalmente',
        type: 'link',
        category: 'download_roadmap',
        analyticsActionTag: 'open_vertical_roadmap',
        href: `/roadmap/${roadmapPath}`,
      },
    ],
    [
      'horizontalView',
      {
        text: 'Visualizar Horizontalmente',
        type: 'link',
        category: 'action',
        analyticsActionTag: 'open_horizontal_roadmap',
        href: `/hroadmap/${roadmapPath}`,
      },
    ],
    [
      'download',
      {
        text: 'Baixar meu Roadmap',
        type: 'button',
        category: 'action',
        analyticsActionTag: 'download_' + title,
        action: handleDownloadImage,
      },
    ],

    [
      'exportNotes',
      {
        text: 'Exportar Anotações',
        type: 'button',
        category: 'action',
        analyticsActionTag: 'export_notes_' + title,
        action: handleExportNotes,
      },
    ],
  ]);

  return (
    <>
      {buttons.map((button: Button) => {
        const buttonArgs = BUTTON_ACTIONS.get(button);

        return buttonArgs && <ButtonElement key={buttonArgs.text} {...buttonArgs} />;
      })}
    </>
  );
};

export default RoadmapButtons;
