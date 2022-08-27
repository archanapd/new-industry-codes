import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './BasicAccordion.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BasicAccordion(props: any) {


  const { state } = useLocation();
 
  const propsData:any = React.useState(state)[0];

  const [expanded, setExpanded] = React.useState<string | false>('panel1'+0);

  const [menuValueSelected, setMenuValue] = React.useState("sic");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const navigate = useNavigate();

  const navigateToDetailPage = (menuValueSelected: any) => {
     var data = {
      type: propsData?.type,
      data: menuValueSelected
    }
    navigate('/naiscCodes', {
      replace: true,
      state: data
    });
  };

  return (
    <div className="acc-block">
      {Object.values(props?.structureDetails).map((level1: any, index1) => {
        return (
          <Accordion
            expanded={expanded === 'panel1'+ index1 }
            onChange={handleChange('panel1' + index1)}
            className="cutom-accordion mb-3">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography className="acc-title" sx={{ flexShrink: 0 }}>
                <span className="acc-title-count">{level1?.naics_code || level1?.code_range}</span> {level1?.short_desc}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div className="custom-acc-grid">
                <div className="col-md-3 d-flex flex-column">
                  <div className="dealer-data bg-light-pink pointer" onClick={() => navigateToDetailPage(level1)}>
                    <span>{level1?.naics_code}</span> {level1?.short_desc}
                  </div>
                </div>
                <div className="col-md-3 d-flex flex-column">
                  {Object.values(level1).map((level2: any, index2) => {
                    handleChange('panel1' + '0');
                    if (level2?.naics_code) {
                      return (
                        <div className="dealer-data bg-light-green pointer" onClick={() => navigateToDetailPage(level2)}>
                          <span>{level2?.naics_code}</span> {level2?.short_desc}
                        </div>
                      )
                    }
                  })}
                </div>

                <div className="col-md-3 d-flex flex-column">
                  {Object.values(level1).map((level2: any, index2) => {
                    if (level2?.naics_code) {
                      {
                        return (
                          Object.values(level2).map((level3: any, index3) => {
                            if (level3?.naics_code) {
                              console.log(level3)
                              return (
                                <div className="dealer-data bg-light-yellow pointer" onClick={() => navigateToDetailPage(level3)}>
                                  <span>{level3?.naics_code}</span> {level3?.short_desc}
                                </div>
                              )
                            }
                          })
                        )

                      }
                    }
                  })}
                </div>

                <div className="col-md-3 d-flex flex-column">
                  {Object.values(level1).map((level2: any, index2) => {
                    if (level2?.naics_code) {
                      {
                        return (
                          Object.values(level2).map((level3: any, index3) => {
                            if (level3?.naics_code) {
                              return (
                                Object.values(level3).map((level4: any, index4) => {
                                  if (level4?.naics_code) {
                                    return (
                                      <div className="dealer-data bg-blue pointer  bg-light-blue" onClick={() => navigateToDetailPage(level4)}>
                                        <span>{level4?.naics_code}</span> {level4?.short_desc}
                                      </div>
                                    )
                                  }
                                })
                              )
                            }
                          })
                        )
                      }
                    }
                  })}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
