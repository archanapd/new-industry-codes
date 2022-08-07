import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './BasicAccordion.scss';

export default function BasicAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="acc-block">
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="cutom-accordion mb-3"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="acc-title" sx={{ flexShrink: 0 }}>
            <span className="acc-title-count">441</span> Motor Vehicle and Parts
            Dealers
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            I am an accordion
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <div className="custom-acc-grid">
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-pink">
                <span>411</span> Motor Vehicle and Parts Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-green">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-yellow ">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-yellow">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className="cutom-accordion mb-3"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="acc-title" sx={{ flexShrink: 0 }}>
            <span className="acc-title-count">441</span> Furniture and Home
            Furnishings Stores
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="custom-acc-grid">
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-pink">
                <span>411</span> Motor Vehicle and Parts Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-green">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-yellow ">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-yellow">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className="cutom-accordion mb-3"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="acc-title" sx={{ flexShrink: 0 }}>
            <span className="acc-title-count">441</span> Motor Vehicle and Parts
            Dealers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="custom-acc-grid">
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-pink">
                <span>411</span> Motor Vehicle and Parts Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-green">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-yellow ">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-yellow">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className="cutom-accordion mb-3"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="acc-title" sx={{ flexShrink: 0 }}>
            <span className="acc-title-count">441</span> Motor Vehicle and Parts
            Dealers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="custom-acc-grid">
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-pink">
                <span>411</span> Motor Vehicle and Parts Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-light-green">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-yellow ">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-yellow">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column">
              <div className="dealer-data bg-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data bg-light-blue">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
              <div className="dealer-data">
                <span>411</span> Automobile Dealers
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
