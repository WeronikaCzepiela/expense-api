import { Injectable } from '@nestjs/common';
import { ReportType } from '../data';
import { ReportService } from '../report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  calculateSummary() {}
}
