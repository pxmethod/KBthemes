<main className="main-layout">
  <Announcement
    data={findSection(data.org.manifest, "announcement")}
    template={data.template}
  />
  <Nav
    data={findSection(data.org.manifest, "header")}
    settings={org.settings}
  />
  <div className="container-contact">
    <div className="container-home">
      <div className="contact-wrapper">
        <SatisfactionForm
          survey={data.survey}
          rating={data.rating}
          formId={data.formId}
          responseId={data.responseId}
          successMessage={
            <Snippet id="sn.kustomer.survey.satisfaction_thank_you" />
          }
          submitButtonText={
            <Snippet id="sn.kustomer.articlesurvey.submit_label" />
          }
        />
      </div>
    </div>
  </div>
</main>;
